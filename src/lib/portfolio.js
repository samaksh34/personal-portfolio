import dbConnect from "./db";
import Profile from "../models/Profile";
import { fallbackData } from "./staticData";

export async function getPortfolioData() {
  try {
    await dbConnect();
    
    // Find the single profile document in the profiles collection
    const profile = await Profile.findOne().lean();
    
    if (profile) {
      // Convert BSON Maps, IDs or timestamps into plain JSON
      return JSON.parse(JSON.stringify(profile));
    }
    
    console.warn("No profile document found in MongoDB. Using static local fallback.");
    return fallbackData;
  } catch (error) {
    console.warn("Database connection failure in getPortfolioData. Gracefully using local static fallback:", error.message);
    return fallbackData;
  }
}
