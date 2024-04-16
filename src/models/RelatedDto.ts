export default class RelatedDto {
  message: string;
  keywords: string[];
  constructor(message: string) {
    this.message = message.toLocaleLowerCase();
    this.keywords = ['tv', 'sofa'];
  }
  
  extractKeywords(): string[] {
    return this.keywords.filter(str => this.message.includes(str.toLowerCase()));
  }
}
