"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { FaGoogle } from "react-icons/fa";


export function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Login</TabsTrigger>
        <TabsTrigger value="password">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Enter details</CardTitle>
            <CardDescription>
              Login with your credentials to start shoping. 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="xyz@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="*******" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3  justify-between">
            <Button className="px-16 font-normal ">LogIn</Button>

            <Button>SignIn with Google <span><FaGoogle /></span></Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Fill all the fields carefully.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Name</Label>
              <Input id="name" type="name"  placeholder="john doe"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Email</Label>
              <Input id="email" type="email" placeholder="xyz@gmail.com"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">password</Label>
              <Input id="new" type="password" placeholder="*******" />
            </div>
            <div className="phone">
              <Label htmlFor="new">Phone</Label>
              <Input id="number" type="number" placeholder="+91 99009090909"/>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3  justify-between">
            <Button className="px-16 font-normal ">Register</Button>

            <Button>SignIn with Google <span><FaGoogle /></span></Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>

    </div>
  )
}
