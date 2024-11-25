import { CopyToClipboardInput } from "./modules/password-manager/domain/services/copy-to-clipboard/copy-to-clipboard.input";
import { CopyToClipboardService } from "./modules/password-manager/domain/services/copy-to-clipboard/copy-to-clipboard.service";

async function start() {
  const copyToClipboardService = new CopyToClipboardService();
  await copyToClipboardService.execute(
    new CopyToClipboardInput("Facundo Nicolas Carballo")
  );
}

start();
