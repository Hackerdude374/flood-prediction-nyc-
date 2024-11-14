// FloodDashboard.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, Droplets, Home, Timer } from 'lucide-react';

interface RiskLevel {
  time: string;
  risk: number;
  active_sensors: number;
  predicted_depth: number;
}

interface VulnerableArea {
  area: string;
  risk_score: number;
  affected_properties: number;
  infrastructure_vulnerability: number;
}

const FloodPreventionDashboard: React.FC = () => {
  const riskLevels: RiskLevel[] = [
    { time: '6:00 AM', risk: 30, active_sensors: 12, predicted_depth: 0.2 },
    { time: '9:00 AM', risk: 45, active_sensors: 13, predicted_depth: 0.3 },
    { time: '12:00 PM', risk: 75, active_sensors: 13, predicted_depth: 0.5 },
    { time: '3:00 PM', risk: 90, active_sensors: 13, predicted_depth: 0.8 },
    { time: '6:00 PM', risk: 60, active_sensors: 13, predicted_depth: 0.4 }
  ];

  const vulnerableAreas: VulnerableArea[] = [
    { area: 'South Beach', risk_score: 85, affected_properties: 245, infrastructure_vulnerability: 78 },
    { area: 'Midland Beach', risk_score: 75, affected_properties: 180, infrastructure_vulnerability: 65 },
    { area: 'New Dorp Beach', risk_score: 70, affected_properties: 156, infrastructure_vulnerability: 72 },
    { area: 'Oakwood Beach', risk_score: 65, affected_properties: 134, infrastructure_vulnerability: 58 }
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Alert variant={riskLevels[3].risk > 80 ? "destructive" : "default"} className="bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="text-lg font-bold">
            High Flood Risk Alert - Immediate Action Required
          </AlertTitle>
          <div className="mt-2">
            <p>Current Risk Level: {riskLevels[3].risk}%</p>
            <p>Predicted Flood Depth: {riskLevels[3].predicted_depth}m</p>
            <p>Active Sensors: {riskLevels[3].active_sensors}</p>
          </div>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Home className="mr-2" />
              Property Impact Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={vulnerableAreas}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="area" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="affected_properties" fill="#2563eb" name="Affected Properties" />
                  <Bar dataKey="infrastructure_vulnerability" fill="#dc2626" name="Infrastructure Risk" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Timer className="mr-2" />
            24-Hour Risk Trend Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={riskLevels}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="risk" stroke="#2563eb" name="Risk Level" />
                <Line type="monotone" dataKey="predicted_depth" stroke="#dc2626" name="Predicted Depth (m)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-700">Emergency Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 space-y-2">
              <li>Deploy response teams to South Beach</li>
              <li>Prepare evacuation routes</li>
              <li>Monitor infrastructure stress points</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-700">Property Owners</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 space-y-2">
              <li>Move vehicles to higher ground</li>
              <li>Deploy flood barriers</li>
              <li>Secure outdoor equipment</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-700">Infrastructure Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-4 space-y-2">
              <li>Check drainage systems</li>
              <li>Monitor pump stations</li>
              <li>Inspect sea walls</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FloodPreventionDashboard;