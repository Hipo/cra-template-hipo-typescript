import {ReactComponent as HipoLogo} from "../../../core/ui/image/hipo-logo.svg";

import "./_page-footer.scss";

function PageFooter() {
  return (
    <footer className={"has-space-between page-footer"}>
      {"Created by Hipo Web team"}

      <HipoLogo className={"page-footer__logo"} />
    </footer>
  );
}

export default PageFooter;
