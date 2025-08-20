import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORG_ID,
});

export async function generateContent(prompt: string, model: string = 'gpt-4o-mini') {
  try {
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful AI assistant for Rooferly Digital, a roof replacement company. Provide clear, professional, and helpful responses.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate content');
  }
}

export async function analyzeText(text: string, analysisType: 'sentiment' | 'summary' | 'keywords') {
  const prompts = {
    sentiment: `Analyze the sentiment of this text and provide a brief assessment: "${text}"`,
    summary: `Provide a concise summary of this text: "${text}"`,
    keywords: `Extract the key topics and keywords from this text: "${text}"`
  };

  return await generateContent(prompts[analysisType]);
}

export { openai };
