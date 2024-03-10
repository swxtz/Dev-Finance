
import { MoneyWrapper } from "@/components/Dashboard/MoneyWrapper/MoneyWrapper";
import { NewTransactionModal } from "@/components/Dashboard/NewTransactionModal";
import { Transactions } from "@/components/Dashboard/Transactions";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dev.Finance | Dashboard",
};



export default async function Dashboard() {
  

  return (
    <main className="mx-32">
      <div className="mt-20">
        <MoneyWrapper/>
      </div>

      <div className="mt-16">
        <NewTransactionModal />
      </div>

      <div className="mt-8">
        <Transactions />
      </div>
    </main>
  );
}
