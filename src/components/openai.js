import OpenAI from "openai";

import { AiApiKey } from "../utils/constants";
const openai = new OpenAI({
  apiKey: AiApiKey,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export default openai;
