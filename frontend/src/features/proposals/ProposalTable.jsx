import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import useProposals from "./useProposals";
import ProposalRow from "./ProposalRow";

function ProposalTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  // if (!Array.isArray(proposals) || proposals.length === 0)
  // return <Empty resourceName="درخواستی" />;

    if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>توضیحات</th>
          <th>زمان تحویل</th>
          <th>هزینه</th>
          <th>وضعیت</th>
        </Table.Header>

        <Table.Body>
          {proposals.map((proposal, index) => (
            <ProposalRow key={proposal._id} proposal={proposal} index={index} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalTable;