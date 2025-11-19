import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

export const useAI = () => {
  const [response, setResponse] = useState("")

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_KEY
  })

  const sendMessageToAI = async (text) => {
    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash-lite",
      contents: text,
    });

    let fullText = ""

    for await (const chunk of response) {
      fullText += chunk.text

      setResponse(fullText)
    }

    return fullText
  }

  return {
    sendMessageToAI,
    response
  }
}