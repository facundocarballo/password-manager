import clipboardy from "clipboardy";
import { CopyToClipboardInput } from "./copy-to-clipboard.input";
import { DomainServiceException } from "../../exceptions/domain-service-exception";
import {
  CopyToClipboardOutput,
  CopyToClipboardResponseOk,
} from "./copy-to-clipboard.output";

export class CopyToClipboardService {
  public async execute(
    input: CopyToClipboardInput
  ): Promise<CopyToClipboardOutput> {
    try {
      await clipboardy.write(input.text);
      return new CopyToClipboardResponseOk();
    } catch (err) {
      return new DomainServiceException("CopyToClipboardService", "execute");
    }
  }
}
