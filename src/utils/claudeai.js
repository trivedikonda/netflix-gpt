import Anthropic from '@anthropic-ai/sdk';
import { ANTHROPIC_API_KEY } from './constants';

const anthropic = new Anthropic({
  apiKey: ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser:true // defaults to process.env["ANTHROPIC_API_KEY"]
});

export default anthropic