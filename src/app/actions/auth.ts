"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function signUpUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  if (!name || !email || !password || !role) {
    return { error: "Missing required fields" };
  }

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "User already exists with this email" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    // TODO: We will trigger a Google Sheets webhook here
    // await sendToGoogleSheets({ name, email, role });

    return { success: true, user: { id: user.id, email: user.email, role: user.role } };
  } catch (error: any) {
    console.error("Signup error:", error);
    return { error: "Something went wrong during signup" };
  }
}

export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  if (!email || !password || !role) {
    return { error: "Missing credentials" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "Invalid credentials" };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch || user.role !== role) {
      return { error: "Invalid credentials or incorrect role" };
    }

    // In a real app we would set a session cookie here.
    return { success: true, user: { id: user.id, email: user.email, role: user.role } };
  } catch (error) {
    return { error: "Something went wrong during login" };
  }
}
