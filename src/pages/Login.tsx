import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Anchor, Languages } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"en" | "es">("en");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-ocean p-4">
      <Card className="w-full max-w-md shadow-elevated">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Anchor className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Absolute Boat Care</h2>
                <p className="text-xs text-muted-foreground">Management System</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="gap-1"
            >
              <Languages className="h-4 w-4" />
              {language.toUpperCase()}
            </Button>
          </div>
          <div>
            <CardTitle className="text-2xl">
              {language === "en" ? "Welcome back" : "Bienvenido"}
            </CardTitle>
            <CardDescription>
              {language === "en" 
                ? "Enter your credentials to access your account" 
                : "Ingrese sus credenciales para acceder"}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">
                {language === "en" ? "Username" : "Usuario"}
              </Label>
              <Input
                id="username"
                type="text"
                placeholder={language === "en" ? "Enter your username" : "Ingrese su usuario"}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">
                {language === "en" ? "Password" : "Contraseña"}
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {language === "en" ? "Remember me" : "Recordarme"}
                </label>
              </div>
              <Button variant="link" className="px-0 text-sm" type="button">
                {language === "en" ? "Forgot password?" : "¿Olvidó su contraseña?"}
              </Button>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary-light" size="lg">
              {language === "en" ? "Login" : "Iniciar sesión"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
