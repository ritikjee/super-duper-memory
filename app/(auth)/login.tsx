import { Link } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
const LoginScreen = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handelSubmit = () => {
    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: "Invalid email" });
      return;
    }

    if (formData.password.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters",
      });
      return;
    }

    alert("Login Successful");
  };

  return (
    <View className="flex-1 justify-center items-center gap-5 bg-secondary/30 w-full ">
      <Card className="w-full max-w-sm py-6 rounded-2xl">
        <CardHeader>
          <CardTitle className="pb-2">
            <View>
              <Text className="text-3xl">Welcome Back</Text>
              <View className="flex flex-row ">
                <Text className="font-light text-sm text-pretty">
                  Don't have an account?{" "}
                </Text>
                <Link href={"/register"} asChild replace>
                  <Text className="font-light text-sm text-pretty text-blue-500">
                    Register here
                  </Text>
                </Link>
              </View>
            </View>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <View className="space-y-2">
            <Label nativeID="email">Enter your email</Label>
            <Input
              placeholder="you@example.com"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              aria-labelledbyledBy="inputLabel"
              aria-errormessage="inputError"
            />
            {errors.email && (
              <Text className="text-red-500 text-sm">{errors.email}</Text>
            )}
          </View>
          <View className="space-y-2">
            <Label nativeID="email">Enter your password</Label>
            <Input
              placeholder="you@example.com"
              textContentType="password"
              value={formData.password}
              onChangeText={(text) => {
                setFormData({ ...formData, password: text });
              }}
              aria-labelledbyledBy="inputLabel"
              aria-errormessage="inputError"
            />
            {errors.password && (
              <Text className="text-red-500 text-sm">{errors.password}</Text>
            )}
          </View>
        </CardContent>
        <CardFooter className="flex-row sm:flex-col pt-5 justify-around gap-3 pb-0 ">
          <Button
            variant="default"
            className="shadow shadow-foreground/5"
            onPress={handelSubmit}
          >
            <Text>Login</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
};

export default LoginScreen;
