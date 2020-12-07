import React from "react";
import {
  IconButton,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  TablePagination
} from "@material-ui/core";

const subscribarList = [
  {
    contractNumber: "99910191",
    insuranceType: "Type A",
    policyHolderName: "Policy Holder Full Name",
    instalmentPremium: "100000",
    singlePremium: "100000",
    paymentFrequency: "Bulanan",
    policyStatus: "Inforce",
    policyDate: "01/01/2021",
    premiumPaidToDate: "01/01/2021"
  },
  {
    contractNumber: "99910191",
    insuranceType: "Type A",
    policyHolderName: "Policy Holder Full Name",
    instalmentPremium: "100000",
    singlePremium: "100000",
    paymentFrequency: "Bulanan",
    policyStatus: "Inforce",
    policyDate: "01/01/2021",
    premiumPaidToDate: "01/01/2021"
  },
  {
    contractNumber: "99910191",
    insuranceType: "Type A",
    policyHolderName: "Policy Holder Full Name",
    instalmentPremium: "100000",
    singlePremium: "100000",
    paymentFrequency: "Bulanan",
    policyStatus: "Inforce",
    policyDate: "01/01/2021",
    premiumPaidToDate: "01/01/2021"
  },
  {
    contractNumber: "99910191",
    insuranceType: "Type A",
    policyHolderName: "Policy Holder Full Name",
    instalmentPremium: "100000",
    singlePremium: "100000",
    paymentFrequency: "Bulanan",
    policyStatus: "Inforce",
    policyDate: "01/01/2021",
    premiumPaidToDate: "01/01/2021"
  }
];

const PaginationTable = () => {
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
  };

  return (
    <div className="w-full overflow-auto">
      <Table className="whitespace-pre product-table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className="px-1 font-bold">Contract Number</TableCell>
            <TableCell align="center" className="px-1 font-bold">Insurance Type</TableCell>
            <TableCell align="center" className="px-1 font-bold">Policy Holder Name</TableCell>
            <TableCell align="center" className="px-1 font-bold">Instalment Premium</TableCell>
            <TableCell align="center" className="px-1 font-bold">Single Premium</TableCell>
            <TableCell align="center" className="px-1 font-bold">Payment Frequency</TableCell>
            <TableCell align="center" className="px-1 font-bold">Policy Status</TableCell>
            <TableCell align="center" className="px-1 font-bold">Policy Inception Date</TableCell>
            <TableCell align="center" className="px-1 font-bold">Premium Paid to Date</TableCell>
            <TableCell align="center" className="px-1 font-bold">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subscribarList
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((subscriber, index) => (
              <TableRow key={index}>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.contractNumber}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.insuranceType}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.policyHolderName}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.instalmentPremium}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.singlePremium}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.paymentFrequency}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.policyStatus}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.policyDate}
                </TableCell>
                <TableCell className="px-1 capitalize" align="center">
                  {subscriber.premiumPaidToDate}
                </TableCell>
                <TableCell className="px-1"  align="center">
                  <IconButton>
                    <Icon color="error">close</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <TablePagination
        className="px-4"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={subscribarList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          "aria-label": "Previous Page"
        }}
        nextIconButtonProps={{
          "aria-label": "Next Page"
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PaginationTable;
