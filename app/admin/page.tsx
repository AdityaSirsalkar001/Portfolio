"use client"

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ContactMessage, Project } from '@/lib/db'

export default function AdminPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [analytics, setAnalytics] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [contactsRes, projectsRes, analyticsRes] = await Promise.all([
        fetch('/api/contact'),
        fetch('/api/projects'),
        fetch('/api/analytics')
      ])

      const [contactsData, projectsData, analyticsData] = await Promise.all([
        contactsRes.json(),
        projectsRes.json(),
        analyticsRes.json()
      ])

      setContacts(contactsData)
      setProjects(projectsData)
      setAnalytics(analyticsData)
    } catch (error) {
      console.error('Failed to fetch admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteProject = async (id: number) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    
    try {
      await fetch(`/api/projects/${id}`, { method: 'DELETE' })
      setProjects(projects.filter(p => p.id !== id))
    } catch (error) {
      console.error('Failed to delete project:', error)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">Loading admin panel...</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
        <p className="text-muted-foreground">Manage your portfolio content and view analytics</p>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="contacts">Contacts ({contacts.length})</TabsTrigger>
          <TabsTrigger value="projects">Projects ({projects.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Visits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics?.stats?.total_visits || 0}</div>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Unique Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics?.stats?.unique_visitors || 0}</div>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pages Visited</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{analytics?.stats?.pages_visited || 0}</div>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="contacts" className="space-y-6">
          <div className="grid gap-4">
            {contacts.map((contact, index) => (
              <Card key={contact.id || index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{contact.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{contact.email}</p>
                    </div>
                    <Badge variant={contact.read ? "secondary" : "default"}>
                      {contact.read ? "Read" : "New"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">{contact.subject}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{contact.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {contact.created_at ? new Date(contact.created_at).toLocaleString() : 'Unknown date'}
                  </p>
                </CardContent>
              </Card>
            ))}
            {contacts.length === 0 && (
              <Card>
                <CardContent className="text-center py-8">
                  <p className="text-muted-foreground">No contact messages yet</p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <Card key={project.id || index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      {project.featured && <Badge>Featured</Badge>}
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => project.id && deleteProject(project.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.map((tech, i) => (
                      <Badge key={i} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 text-sm">
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:underline">
                        GitHub
                      </a>
                    )}
                    {project.live_url && (
                      <a href={project.live_url} target="_blank" rel="noopener noreferrer"
                         className="text-green-600 hover:underline">
                        Live Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
