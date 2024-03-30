export class IndexService {
  async health(): Promise<object> {
    return {
      message: 'Go Serverless v3.0! Your function executed successfully!',
    };
  }
}
