"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Home, Ruler, TrendingUp, Calendar, Calculator } from "lucide-react"
import { trackEvent, formatPrice } from "@/lib/utils"

interface EstimateFormData {
  address: string
  roofType: string
  squareFootage: number
  pitch: string
  age: string
  condition: string
}

interface EstimateResult {
  range: { min: number; max: number }
  recommendedTier: string
  addOns: string[]
  totalSqFt: number
}

export function EstimateForm() {
  const [formData, setFormData] = React.useState<EstimateFormData>({
    address: "",
    roofType: "",
    squareFootage: 2000,
    pitch: "",
    age: "",
    condition: ""
  })
  
  const [currentStep, setCurrentStep] = React.useState(1)
  const [estimate, setEstimate] = React.useState<EstimateResult | null>(null)
  const [isCalculating, setIsCalculating] = React.useState(false)

  const handleInputChange = (field: keyof EstimateFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateEstimate = async () => {
    setIsCalculating(true)
    trackEvent('estimate_started', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Mock calculation based on inputs
    const basePrice = formData.squareFootage * (formData.roofType === 'metal' ? 8 : 5.5)
    const multiplier = formData.pitch === 'steep' ? 1.3 : formData.pitch === 'moderate' ? 1.1 : 1.0
    const ageMultiplier = formData.age === 'over-30' ? 1.2 : 1.0
    
    const calculatedPrice = basePrice * multiplier * ageMultiplier
    
    const result: EstimateResult = {
      range: { 
        min: Math.round(calculatedPrice * 0.85), 
        max: Math.round(calculatedPrice * 1.25) 
      },
      recommendedTier: calculatedPrice > 15000 ? 'Best' : calculatedPrice > 10000 ? 'Better' : 'Good',
      addOns: [
        ...(formData.age === 'over-30' ? ['Enhanced Ventilation'] : []),
        ...(formData.condition === 'poor' ? ['Priority Scheduling'] : []),
        'Ice & Water Shield Plus'
      ],
      totalSqFt: formData.squareFootage
    }
    
    setEstimate(result)
    setIsCalculating(false)
    trackEvent('estimate_calculated', { ...formData, result })
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      calculateEstimate()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.address.length > 5
      case 2: return formData.roofType !== ""
      case 3: return formData.squareFootage > 0
      case 4: return formData.pitch !== "" && formData.age !== ""
      default: return false
    }
  }

  if (estimate) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Results Header */}
        <Card className="border-primary shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl text-primary">Your Estimate</CardTitle>
            <CardDescription>Based on your roof specifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">
                {formatPrice(estimate.range.min)} - {formatPrice(estimate.range.max)}
              </div>
              <p className="text-muted-foreground">
                Estimated range for {estimate.totalSqFt} sq ft • {formData.roofType} roof
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 pt-6 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{estimate.recommendedTier}</div>
                <div className="text-sm text-muted-foreground">Recommended Package</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{estimate.addOns.length}</div>
                <div className="text-sm text-muted-foreground">Suggested Add-ons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2-3 days</div>
                <div className="text-sm text-muted-foreground">Est. Install Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommended Add-ons */}
        {estimate.addOns.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Recommended Add-ons</span>
              </CardTitle>
              <CardDescription>Based on your roof age and condition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {estimate.addOns.map((addOn) => (
                  <div key={addOn} className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="font-medium">{addOn}</span>
                    <Button variant="outline" size="sm">Add to Quote</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Ready to Move Forward?</span>
            </CardTitle>
            <CardDescription>Lock in your estimate and schedule your installation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Button size="lg" className="w-full">
                Continue to Scheduling
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Get Detailed Quote
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              No commitment required • Prices guaranteed for 30 days
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Step {currentStep} of 4</span>
          <span className="text-sm text-muted-foreground">{Math.round((currentStep / 4) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 4) * 100}%` }}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            {currentStep === 1 && <MapPin className="h-6 w-6 text-primary" />}
            {currentStep === 2 && <Home className="h-6 w-6 text-primary" />}
            {currentStep === 3 && <Ruler className="h-6 w-6 text-primary" />}
            {currentStep === 4 && <Calculator className="h-6 w-6 text-primary" />}
            <div>
              <CardTitle>
                {currentStep === 1 && "Property Location"}
                {currentStep === 2 && "Roof Type"}
                {currentStep === 3 && "Size & Coverage"}
                {currentStep === 4 && "Roof Details"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Enter your property address for local pricing"}
                {currentStep === 2 && "What type of roof do you have?"}
                {currentStep === 3 && "Help us estimate your roof size"}
                {currentStep === 4 && "A few more details for accuracy"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Address */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Street Address</label>
                <Input
                  placeholder="123 Main Street, Chicago, IL 60601"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  We use this for local pricing and material availability
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Roof Type */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Current Roof Material</label>
                <Select value={formData.roofType} onValueChange={(value) => handleInputChange('roofType', value)}>
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Select roof type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asphalt">Asphalt Shingles</SelectItem>
                    <SelectItem value="metal">Metal Roofing</SelectItem>
                    <SelectItem value="tile">Clay/Concrete Tile</SelectItem>
                    <SelectItem value="slate">Slate</SelectItem>
                    <SelectItem value="flat">Flat Roof (TPO/EPDM)</SelectItem>
                    <SelectItem value="other">Other/Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 3: Size */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Approximate Square Footage: {formData.squareFootage} sq ft
                </label>
                <Slider
                  value={[formData.squareFootage]}
                  onValueChange={(value) => handleInputChange('squareFootage', value[0])}
                  max={5000}
                  min={800}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>800 sq ft</span>
                  <span>5,000+ sq ft</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Don't know? We'll verify with satellite imagery
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Details */}
          {currentStep === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Roof Pitch</label>
                <Select value={formData.pitch} onValueChange={(value) => handleInputChange('pitch', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select pitch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low pitch (under 4/12)</SelectItem>
                    <SelectItem value="moderate">Moderate pitch (4/12 - 8/12)</SelectItem>
                    <SelectItem value="steep">Steep pitch (over 8/12)</SelectItem>
                    <SelectItem value="unknown">Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Age of Current Roof</label>
                <Select value={formData.age} onValueChange={(value) => handleInputChange('age', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-10">0-10 years</SelectItem>
                    <SelectItem value="10-20">10-20 years</SelectItem>
                    <SelectItem value="20-30">20-30 years</SelectItem>
                    <SelectItem value="over-30">Over 30 years</SelectItem>
                    <SelectItem value="unknown">Not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            <Button 
              onClick={nextStep}
              disabled={!isStepValid() || isCalculating}
              className="min-w-[120px]"
            >
              {isCalculating ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
                  <span>Calculating...</span>
                </div>
              ) : currentStep === 4 ? (
                "Get Estimate"
              ) : (
                "Next"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
