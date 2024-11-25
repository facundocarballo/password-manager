import { DomainServiceException } from "../../exceptions/domain-service-exception";

export class CopyToClipboardResponseOk {}

export type CopyToClipboardOutput =
  | CopyToClipboardResponseOk
  | DomainServiceException;
