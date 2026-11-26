import React from 'react'

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

function Login({ onLoginSuccess }) {

    const handleLogin = (e) => {
        e.preventDefault()

        // Frontend login demonstration
        onLoginSuccess()
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">

            <Card className="w-full max-w-md shadow-lg">

                <CardHeader className="text-center">

                    <CardTitle className="text-3xl font-bold text-blue-600">
                        RentEasy
                    </CardTitle>

                    <CardDescription>
                        Welcome back! Login to manage your rental properties.
                    </CardDescription>

                </CardHeader>

                <form onSubmit={handleLogin}>

                    <CardContent className="flex flex-col gap-5">

                        <div className="grid gap-2">

                            <Label htmlFor="email">Email Address</Label>

                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                        </div>

                        <div className="grid gap-2">

                            <Label htmlFor="password">Password</Label>

                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                            />

                        </div>

                        <div className="text-right">

                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot Password?
                            </a>

                        </div>

                    </CardContent>

                    <CardFooter className="flex flex-col gap-3">

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Login
                        </Button>

                        <p className="text-center text-sm text-gray-500">
                            Don't have an account?{" "}
                            <span className="cursor-pointer font-medium text-blue-600">
                                Sign Up
                            </span>
                        </p>

                    </CardFooter>

                </form>

            </Card>

        </div>
    )
}

export default Login