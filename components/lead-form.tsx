"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Phone, Home, MessageSquare } from "lucide-react"
import { validateEmail, validatePhone, submitLead, trackEvent } from "@/lib/utils"

interface LeadFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  projectType: string
  timeline: string
  message: string
  consent: boolean
  source: string
}

interface LeadFormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
  projectType?: string
  timeline?: string
  message?: string
  consent?: string
  source?: string
}

interface LeadFormProps {
  title?: string
  description?: string
  projectType?: string
  source?: string
  onSuccess?: () => void
}

export function LeadForm({ 
  title = "Get Your Free Estimate",
  description = "Tell us about your project and we'll provide a detailed quote",
  projectType = "",
  source = "website",
  onSuccess
}: LeadFormProps) {
  const [formData, setFormData] = React.useState<LeadFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    projectType: projectType,
    timeline: "",
    message: "",
    consent: false,
    source: source
  })

  const [errors, setErrors] = React.useState<LeadFormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleInputChange = (field: keyof LeadFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: LeadFormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.projectType) newErrors.projectType = "Please select a project type"
    if (!formData.timeline) newErrors.timeline = "Please select a timeline"
    if (!formData.consent) newErrors.consent = "You must agree to be contacted"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Add UTM parameters if available
      const urlParams = new URLSearchParams(window.location.search)
      const leadData = {
        ...formData,
        utm_source: urlParams.get('utm_source') || 'direct',
        utm_medium: urlParams.get('utm_medium') || 'website',
        utm_campaign: urlParams.get('utm_campaign') || 'organic',
        timestamp: new Date().toISOString(),
        page: window.location.pathname
      }
      
      await submitLead(leadData)
      
      trackEvent('lead_submitted', leadData)
      setIsSubmitted(true)
      
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error('Lead submission failed:', error)
      // In a real app, show error message to user
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-emerald-200 bg-emerald-50">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <CardTitle className="text-emerald-800">Thank You!</CardTitle>
          <CardDescription className="text-emerald-700">
            We've received your information and will contact you within 2 hours during business hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="bg-white rounded-lg p-4 border border-emerald-200">
            <h4 className="font-semibold text-emerald-800 mb-2">What happens next?</h4>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>• We'll review your project details</li>
              <li>• A roofing specialist will email you</li>
              <li>• We'll schedule a convenient time for service</li>
              <li>• You'll receive a detailed estimate</li>
            </ul>
          </div>
          <p className="text-sm text-emerald-600">
            Questions? Email us at <strong>roof@rooferly.co</strong>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="John"
                className={errors.firstName ? 'border-destructive' : ''}
              />
              {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Smith"
                className={errors.lastName ? 'border-destructive' : ''}
              />
              {errors.lastName && <p className="text-xs text-destructive mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@example.com"
                className={`pl-10 ${errors.email ? 'border-destructive' : ''}`}
              />
            </div>
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
                className={`pl-10 ${errors.phone ? 'border-destructive' : ''}`}
              />
            </div>
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>

          {/* Project Address */}
          <div>
            <label className="block text-sm font-medium mb-1">Project Address</label>
            <div className="relative">
              <Home className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="123 Main St, Chicago, IL 60601"
                className={`pl-10 ${errors.address ? 'border-destructive' : ''}`}
              />
            </div>
            {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Project Type</label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                <SelectTrigger className={errors.projectType ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="replacement">Full Replacement</SelectItem>
                  <SelectItem value="repair">Repair</SelectItem>
                  <SelectItem value="inspection">Inspection</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && <p className="text-xs text-destructive mt-1">{errors.projectType}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Timeline</label>
              <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                <SelectTrigger className={errors.timeline ? 'border-destructive' : ''}>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                  <SelectItem value="1-month">Within a month</SelectItem>
                  <SelectItem value="3-months">Next 3 months</SelectItem>
                  <SelectItem value="planning">Just planning</SelectItem>
                </SelectContent>
              </Select>
              {errors.timeline && <p className="text-xs text-destructive mt-1">{errors.timeline}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">Additional Details (Optional)</label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Tell us more about your project..."
                rows={3}
                className="w-full pl-10 pr-3 py-2 border border-input rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
              className={errors.consent ? 'border-destructive' : ''}
            />
            <div className="text-sm">
              <label htmlFor="consent" className="cursor-pointer">
                I agree to be contacted about this project via phone, email, or text message.
              </label>
              {errors.consent && <p className="text-xs text-destructive mt-1">{errors.consent}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full" 
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
                <span>Submitting...</span>
              </div>
            ) : (
              "Get My Free Estimate"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our privacy policy. We'll never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
