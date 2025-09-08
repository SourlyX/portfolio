import styled from "styled-components"

const TablesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const TableContainer = styled.div`
  width: 45%;
`

const StyledTable = styled.table`
  width: 100%;
  margin: 30px 0px;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`

const TableHeader = styled.thead`
  background-color: #333;
  color: white;
  font-size: 1.5em;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #383838;
  }
  &:hover {
    background-color: #4c4c4c;
  }
`

const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #444;
  text-align: left;
  color: #f0f0f0;
`

const Bin = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  align-self: right;
  transform: scale(1);
  transition: transform 150ms ease-in;

  &:hover {
    transform: scale(1.15);
  }
`

const Tables = ({ income, expenses, handleDelete }) =>{
  return (
    <>
    <TablesContainer>
      <TableContainer>
        <h1 style={{ textAlign: "center" }}>Incomes</h1>
        <StyledTable>
          <TableHeader>
            <TableRow>
              <TableCell>Income types</TableCell>
              <TableCell>Amout</TableCell>
            </TableRow>
          </TableHeader>
            {income.map((target) => (
              <TableRow key={`${target.type}-${target.amount}`}>
                <TableCell>{target.type}</TableCell>
                <TableCell 
                style={{ 
                  display: "flex", 
                  flexDirection: "row", 
                  justifyContent: "space-between", 
                  alignItems: "center" 
                }}>{"₡" + target.amount}
                {target.type !== "Total" && (
                  <Bin
                    src={`${process.env.PUBLIC_URL}/productos/garbage.png`}
                    alt="Garbage Icon"
                    onClick={() => handleDelete(income, target)}
                    />
                  )}</TableCell>
              </TableRow>
            ))}
        </StyledTable>
      </TableContainer>

      <TableContainer>
        <h1 style={{ textAlign: "center" }}>Expenses</h1>
        <StyledTable>
          <TableHeader>
            <TableRow>
              <TableCell>Expense types</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHeader>
            {expenses.map((target) => (
              <TableRow key={`${target.type}-${target.amount}`}>
                <TableCell>{target.type}</TableCell>
                <TableCell 
                style={{ 
                  display: "flex", 
                  flexDirection: "row", 
                  justifyContent: "space-between", 
                  alignItems: "center" 
                }}>{"₡" + target.amount}
                {target.type !== "Total" && (
                  <Bin
                    src={`${process.env.PUBLIC_URL}/productos/garbage.png`}
                    alt="Garbage Icon"
                    onClick={() => handleDelete(expenses, target)}
                    />
                  )}</TableCell>
              </TableRow>
            ))}
        </StyledTable>
      </TableContainer>
    </TablesContainer>

    <TableContainer>
      <h1 style={{ textAlign: "center" }}>Financial Overview</h1>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableCell>Movements</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHeader>
        <TableRow>
          <TableCell>Incomes</TableCell>
          <TableCell>{"₡" + income.at(-1).amount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Expenses</TableCell>
          <TableCell>{"₡" + expenses.at(-1).amount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>{"₡" + (income.at(-1).amount-expenses.at(-1).amount).toString()}</TableCell>
        </TableRow>
      </StyledTable>
    </TableContainer>
    </>
  )
}

export default Tables