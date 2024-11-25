export class DomainServiceException extends Error {
  constructor(
    public readonly domainService: string,
    public readonly method: string
  ) {
    super("DomainServiceException");
  }
}
