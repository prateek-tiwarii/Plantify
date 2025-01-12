import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ChevronRight, Sprout } from 'lucide-react';

const CatagoryCard = () => {
    return (
        <div className="flex flex-row justify-between gap-4 ">
            <Card className="hover:bg-green-700 group">
                <CardHeader>
                    <CardTitle>
                        <Sprout size={84} className="text-green-500 group-hover:text-white" />
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between flex-col">
                        <span className="text-4xl font-semibold group-hover:text-white">
                            Plants
                        </span>
                        <span className="text-gray-500 text-sm group-hover:text-white">
                            15+ Products
                        </span>
                    </div>
                </CardContent>
            </Card>


            <Card>
                <CardHeader>
                    <CardTitle>Interviewer Availability</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-semibold">70%</span>
                        <span className="text-gray-500 text-sm">Interviewers available</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Completed Interviews</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-semibold">85</span>
                        <span className="text-gray-500 text-sm">this month</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Total Interview Scheduled</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <span className="text-4xl font-semibold">120</span>
                        <span className="text-gray-500 text-sm">+10% from last month</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CatagoryCard