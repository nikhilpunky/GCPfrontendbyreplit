import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid form data",
          errors: parsed.error.flatten().fieldErrors 
        });
      }
      
      const message = await storage.createContactMessage(parsed.data);
      
      return res.status(201).json({ 
        message: "Message sent successfully",
        id: message.id 
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ message: "Failed to send message" });
    }
  });

  return httpServer;
}
