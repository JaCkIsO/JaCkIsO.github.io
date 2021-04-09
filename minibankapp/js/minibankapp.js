/**
 * minibankapp.js
 */
"use strict";
$(function () {
    let currentRowId = 2;
    $("#formNewAccount").submit(function (e) {
        e.preventDefault();
        const txtAccountNo = $("#txtAccountNo");
        const txtCustomerName = $("#txtCustomerName");
        const ddlAccountType = $("#ddlAccountType");
        const strAccountNo = txtAccountNo.val();
        const strCustomerName = txtCustomerName.val();
        const strAccountType = ddlAccountType.val();
        addNewAccountDataRow(strAccountNo, strCustomerName, strAccountType);
        txtAccountNo.val("");
        txtCustomerName.val("");
        ddlAccountType["selectedIndex"] = 0;
        txtAccountNo.focus();
    })
    const addNewAccountDataRow = function (accountNo, customerName, accountType) {
        $("#tblAccounts tr:last").after("<tr>" +
            "<td>" + ++currentRowId + ".</td>" +
            "<td>" + accountNo + "</td>" +
            "<td>" + customerName + "</td>" +
            "<td id=\"account-type\">" + accountType + "</td>" +
            "</tr>");
    }

    $("#savingsOnly").change(function (event) {
        if (this.checked) {
            $("#tblAccounts tbody > tr").filter(function () {
                $(this).toggle($(this).find('#account-type').text().toLowerCase().indexOf("savings") > -1)
            });
        } else {
            $("#tblAccounts tbody > tr").show();
        }
    });
});
