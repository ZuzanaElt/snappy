import { Account } from "../components/auth/Account";
import { Auth } from "../components/auth/Auth";
import "../scss/pages/account.scss";
function AccountDisplay({ session }) {
  return (
    <div className="auth-container">
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}
export default AccountDisplay;
