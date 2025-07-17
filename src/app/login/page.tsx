'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Add authentication logic here
    router.push('/');
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" className="w-full font-semibold">Login</Button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="reg-name">Full Name</Label>
        <Input id="reg-name" type="text" placeholder="John Doe" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-email">Email</Label>
        <Input id="reg-email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-password">Password</Label>
        <Input id="reg-password" type="password" required />
      </div>
      <Button type="submit" className="w-full font-semibold">Create Account</Button>
    </form>
  );
}


export default function LoginPage() {
  const [tab, setTab] = useState('login');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#register') {
        setTab('register');
      } else {
        setTab('login');
      }
    }
  }, []);

  return (
    <div className="flex items-center justify-center py-16 md:py-24 bg-gray-50 min-h-[calc(100vh-8rem)]">
      <div className="w-full max-w-md mx-4">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Welcome Back</CardTitle>
                <CardDescription>Enter your credentials to access your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <LoginForm />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Create an Account</CardTitle>
                <CardDescription>Join Farmgate Access to get paid faster.</CardDescription>
              </CardHeader>
              <CardContent>
                <RegisterForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
