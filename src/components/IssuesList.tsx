import { IssueResponse } from "../models/Issue";
import IssueListItem from "./IssueListItem";
import "./IssuesList.css";

interface Props {
  issues: IssueResponse[];
  assigneeFilter: string;
  statusFilter: string;
}

function IssueList({ issues, assigneeFilter, statusFilter }: Props) {
  return (
    <ol className="IssuesList">
      {issues.map((issue) => {
        if (assigneeFilter !== "" && assigneeFilter !== issue.assignee) {
          return;
        }
        if (statusFilter !== "" && statusFilter !== issue.status) {
          return;
        }
        return <IssueListItem key={issue._id} issue={issue} />;
      })}
    </ol>
  );
}

export default IssueList;
