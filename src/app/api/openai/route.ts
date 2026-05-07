import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: getQwenApiKey(),
  baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1',
});

type RequestBody = {
  prompt?: string;
};

function getQwenApiKey() {
  const key = process.env.QWEN_API_KEY?.trim();
  if (!key) {
    throw new Error('QWEN_API_KEY is not configured');
  }
  return key;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const prompt = body.prompt?.trim();
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'qwen-plus',
      messages: [{ role: 'user', content: prompt }],
    });

    return NextResponse.json({
      output: completion.choices[0]?.message?.content ?? '',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';

    if (message.includes('QWEN_API_KEY')) {
      return NextResponse.json({ error: message }, { status: 500 });
    }

    return NextResponse.json({ error: message }, { status: 502 });
  }
}
