import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IssueFilterForm.css";

interface Props {
  initialAssigneeValue: string;
  initialStatusValue: string;
}

function IssueFilterForm({ initialAssigneeValue, initialStatusValue }: Props) {
  const [statusFilter, setStatusFilter] = useState(initialStatusValue);
  const [assigneeFilter, setAssigneeFilter] = useState(initialAssigneeValue);
  const navigate = useNavigate();

  function applyFilter(submitEvent: FormEvent): void {
    submitEvent.preventDefault();
    navigate(
      `/?${new URLSearchParams({
        assignee: assigneeFilter,
        status: statusFilter,
      })}`
    );
  }
  return (
    <form className="IssueFilterForm" onSubmit={applyFilter}>
      <h2 className="filter-title">Filter By:</h2>
      <section>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          name="status"
          id="status"
          value={statusFilter}
          onChange={(changeEvent) => setStatusFilter(changeEvent.target.value)}
        />
      </section>

      <section>
        <label htmlFor={"assignee"}>Assignee:</label>
        <input
          type={"text"}
          name={"assignee"}
          id={"assignee"}
          value={assigneeFilter}
          onChange={(changeEvent) =>
            setAssigneeFilter(changeEvent.target.value)
          }
        />
        <input type={"submit"} value={"Apply Filter"} />
      </section>
    </form>
  );
}

export default IssueFilterForm;
