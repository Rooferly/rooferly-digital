"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Calendar, Clock, Zap, Users, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/utils"

interface TimeSlot {
  id: string
  date: string
  time: string
  available: boolean
  priority: boolean
  crewAssigned?: string
  type: 'standard' | 'priority' | 'emergency'
}

interface ScheduleGridProps {
  onSlotSelect?: (slot: TimeSlot) => void
}

// Mock data for next 14 days
const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = []
  const today = new Date()
  
  for (let day = 1; day <= 14; day++) {
    const currentDate = new Date(today)
    currentDate.setDate(today.getDate() + day)
    
    // Skip Sundays
    if (currentDate.getDay() === 0) continue
    
    const dateStr = currentDate.toISOString().split('T')[0]
    const dayOfWeek = currentDate.getDay()
    
    // Morning slots
    if (dayOfWeek !== 6) { // No Saturday mornings for standard
      slots.push({
        id: `${dateStr}-am`,
        date: dateStr,
        time: '8:00 AM - 12:00 PM',
        available: Math.random() > 0.3,
        priority: Math.random() > 0.7,
        type: Math.random() > 0.8 ? 'priority' : 'standard',
        crewAssigned: Math.random() > 0.5 ? 'Crew Alpha' : 'Crew Beta'
      })
    }
    
    // Afternoon slots
    slots.push({
      id: `${dateStr}-pm`,
      date: dateStr,
      time: '12:00 PM - 5:00 PM',
      available: Math.random() > 0.4,
      priority: Math.random() > 0.6,
      type: Math.random() > 0.7 ? 'priority' : 'standard',
      crewAssigned: Math.random() > 0.5 ? 'Crew Gamma' : 'Crew Delta'
    })
  }
  
  return slots
}

export function ScheduleGrid({ onSlotSelect }: ScheduleGridProps) {
  const [selectedSlot, setSelectedSlot] = React.useState<TimeSlot | null>(null)
  const [priorityMode, setPriorityMode] = React.useState(false)
  const [timeSlots] = React.useState(() => generateTimeSlots())

  const handleSlotSelect = (slot: TimeSlot) => {
    if (!slot.available) return
    
    setSelectedSlot(slot)
    onSlotSelect?.(slot)
    trackEvent('schedule_slot_selected', { 
      slotId: slot.id, 
      date: slot.date, 
      time: slot.time,
      priority: priorityMode 
    })
  }

  const handlePriorityToggle = (enabled: boolean) => {
    setPriorityMode(enabled)
    trackEvent('priority_scheduling_toggled', { enabled })
  }

  // Group slots by date
  const slotsByDate = timeSlots.reduce((acc, slot) => {
    if (!acc[slot.date]) acc[slot.date] = []
    acc[slot.date].push(slot)
    return acc
  }, {} as Record<string, TimeSlot[]>)

  // Filter slots based on priority mode
  const filteredSlots = priorityMode 
    ? timeSlots.filter(slot => slot.type === 'priority' || slot.priority)
    : timeSlots

  const availableSlots = filteredSlots.filter(slot => slot.available)

  return (
    <div className="space-y-8">
      {/* Priority Scheduling Toggle */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Zap className="h-6 w-6 text-primary" />
              <div>
                <CardTitle className="text-lg">Priority Scheduling</CardTitle>
                <CardDescription>
                  Skip the line with reserved crews and earlier slots (+$500)
                </CardDescription>
              </div>
            </div>
            <Switch
              checked={priorityMode}
              onCheckedChange={handlePriorityToggle}
              className="data-[state=checked]:bg-primary"
            />
          </div>
        </CardHeader>
        
        {priorityMode && (
          <CardContent className="pt-0">
            <div className="bg-primary/10 rounded-lg p-4">
              <h4 className="font-semibold text-primary mb-2 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Priority Benefits Active
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Access to reserved crew slots</li>
                <li>• 2-3 weeks earlier availability</li>
                <li>• Dedicated project manager</li>
                <li>• Priority emergency service</li>
              </ul>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Available Slots Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{availableSlots.length}</div>
              <div className="text-sm text-muted-foreground">Available Slots</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">
                {Math.min(...availableSlots.map(slot => {
                  const slotDate = new Date(slot.date)
                  const today = new Date()
                  return Math.ceil((slotDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
                }))}
              </div>
              <div className="text-sm text-muted-foreground">Days Until Next</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">4</div>
              <div className="text-sm text-muted-foreground">Available Crews</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendar Grid */}
      <div className="grid gap-6">
        {Object.entries(slotsByDate)
          .filter(([_, slots]) => slots.some(slot => 
            priorityMode ? (slot.type === 'priority' || slot.priority) && slot.available : slot.available
          ))
          .slice(0, 7) // Show first 7 days with availability
          .map(([date, slots]) => {
            const dateObj = new Date(date)
            const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' })
            const monthDay = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            
            const filteredDaySlots = slots.filter(slot => 
              priorityMode ? (slot.type === 'priority' || slot.priority) : true
            )

            return (
              <Card key={date} className="overflow-hidden">
                <CardHeader className="bg-muted/30 py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{dayName}</CardTitle>
                      <CardDescription>{monthDay}</CardDescription>
                    </div>
                    <Badge variant="outline">
                      {filteredDaySlots.filter(s => s.available).length} available
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="grid gap-3">
                    {filteredDaySlots.map((slot) => (
                      <Button
                        key={slot.id}
                        variant={selectedSlot?.id === slot.id ? "default" : "outline"}
                        disabled={!slot.available}
                        onClick={() => handleSlotSelect(slot)}
                        className={cn(
                          "w-full justify-between h-auto p-4",
                          slot.type === 'priority' && "border-primary/50 bg-primary/5",
                          !slot.available && "opacity-50"
                        )}
                      >
                        <div className="text-left">
                          <div className="font-medium">{slot.time}</div>
                          {slot.crewAssigned && (
                            <div className="text-xs text-muted-foreground">
                              {slot.crewAssigned}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {slot.type === 'priority' && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary">
                              <Zap className="h-3 w-3 mr-1" />
                              Priority
                            </Badge>
                          )}
                          {!slot.available && (
                            <Badge variant="secondary">Booked</Badge>
                          )}
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
      </div>

      {/* Selection Summary */}
      {selectedSlot && (
        <Card className="border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>Selected Time Slot</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Date</div>
                <div className="font-medium">
                  {new Date(selectedSlot.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Time</div>
                <div className="font-medium">{selectedSlot.time}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Crew</div>
                <div className="font-medium">{selectedSlot.crewAssigned}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Type</div>
                <div className="font-medium capitalize">
                  {selectedSlot.type}
                  {priorityMode && <Badge className="ml-2" variant="secondary">+$500</Badge>}
                </div>
              </div>
            </div>
            
            <Button className="w-full" size="lg">
              Continue to Booking Details
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* No slots message */}
      {availableSlots.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Available Slots</h3>
            <p className="text-muted-foreground mb-4">
              {priorityMode 
                ? "No priority slots available in the next 14 days. Try turning off Priority Scheduling or contact us for custom scheduling."
                : "All slots are currently booked. Enable Priority Scheduling for more options or contact us directly."
              }
            </p>
            <div className="flex justify-center space-x-4">
              {priorityMode && (
                <Button variant="outline" onClick={() => setPriorityMode(false)}>
                  View Standard Slots
                </Button>
              )}
              <Button>
                Contact Us
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
