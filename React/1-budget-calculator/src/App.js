import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button as BootstrapButton } from "react-bootstrap";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ item: "", cost: "" });
  const [total, setTotal] = useState(0);
  const [editModal, setEditModal] = useState({
    show: false,
    index: null,
    item: "",
    cost: "",
  });

  const handleAddExpense = () => {
    if (newExpense.item && newExpense.cost) {
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      setTotal(total + parseFloat(newExpense.cost));
      toast.success("지출을 추가하였습니다.");
      setNewExpense({ item: "", cost: "" });
    } else {
      toast.error("지출 항목과 비용을 입력하세요!");
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setTotal(total - parseFloat(expenses[index].cost));
    setExpenses(updatedExpenses);
    toast.info("항목이 삭제되었습니다.");
  };

  const handleEditExpense = (index) => {
    setEditModal({
      show: true,
      index,
      item: expenses[index].item,
      cost: expenses[index].cost,
    });
  };

  const saveEditedExpense = () => {
    const updatedExpenses = expenses.map((expense, i) =>
      i === editModal.index
        ? { item: editModal.item, cost: editModal.cost }
        : expense
    );
    const costDifference =
      parseFloat(editModal.cost) - parseFloat(expenses[editModal.index].cost);
    setTotal(total + costDifference);
    setExpenses(updatedExpenses);
    setEditModal({ show: false, index: null, item: "", cost: "" });
    toast.success("지출 항목을 수정하였습니다.");
  };

  const clearAllExpenses = () => {
    setExpenses([]);
    setTotal(0);
    toast.info("All expenses cleared.");
  };

  return (
    <div
      style={{
        backgroundColor: "#ffff99",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div className="container mt-4">
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar
          closeOnClick={false}
          theme="light"
        />
        <h1 className="mb-4">예산 계산기</h1>
        <div className="row mb-4">
          <div className="col-md-4">
            <input
              type="text"
              value={newExpense.item}
              onChange={(e) =>
                setNewExpense({ ...newExpense, item: e.target.value })
              }
              placeholder="예) 렌트비"
              className="form-control mb-2"
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              value={newExpense.cost}
              onChange={(e) =>
                setNewExpense({ ...newExpense, cost: e.target.value })
              }
              placeholder="비용"
              className="form-control mb-2"
            />
          </div>
          <div className="col-md-4">
            <BootstrapButton
              className="w-100"
              variant="primary"
              onClick={handleAddExpense}
            >
              지출 추가
            </BootstrapButton>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">지출 목록</h2>
            <ul className="list-group">
              {expenses.map((expense, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {expense.item}: ₩{expense.cost}
                  <div>
                    <BootstrapButton
                      variant="warning"
                      size="sm"
                      className="mr-2"
                      onClick={() => handleEditExpense(index)}
                      style={{ margin: "5px" }}
                    >
                      수정
                    </BootstrapButton>
                    <BootstrapButton
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteExpense(index)}
                      style={{ margin: "5px" }}
                    >
                      삭제
                    </BootstrapButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h3>총지출: {total}원</h3>
          <BootstrapButton variant="danger" onClick={clearAllExpenses}>
            목록 전체 지우기
          </BootstrapButton>
        </div>
      </div>

      <Modal
        show={editModal.show}
        onHide={() => setEditModal({ ...editModal, show: false })}
      >
        <Modal.Header closeButton>
          <Modal.Title>지출 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control mb-3"
            value={editModal.item}
            onChange={(e) =>
              setEditModal({ ...editModal, item: e.target.value })
            }
            placeholder="지출항목"
          />
          <input
            type="number"
            className="form-control mb-3"
            value={editModal.cost}
            onChange={(e) =>
              setEditModal({ ...editModal, cost: e.target.value })
            }
            placeholder="비용"
          />
        </Modal.Body>
        <Modal.Footer>
          <BootstrapButton
            variant="secondary"
            onClick={() => setEditModal({ ...editModal, show: false })}
          >
            닫기
          </BootstrapButton>
          <BootstrapButton variant="primary" onClick={saveEditedExpense}>
            저장
          </BootstrapButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
