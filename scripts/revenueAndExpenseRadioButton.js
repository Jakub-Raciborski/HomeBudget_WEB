var radioChoice = document.getElementById('revenueExpenseChoice');

radioChoice.addEventListener("click", function() {checkClick();});

let expenseHTML = 	'<div><label for="paymentMethods">Payment methods:</label></div>' +
					"<select id='paymentMethods' class='categories'>" +
						"<option selected>Cash</option>" +
						"<option>Credit Card</option>" +
						"<option>Debit Card</option>" +
						"<option>Money Transfer</option>" +
						"<option>Internet Payment</option>" +
					"</select>" +
					'<div><label for="ExpenseType">Expense category:</label></div>' +
					'<select id="ExpenseType" class="categories">' +
						"<option selected>Food</option>" +
						"<option>Home</option>" +
						"<option>Transport</option>" +
						"<option>Holidays</option>" +
						"<option>Health</option>" +
						"<option>Hygiene</option>" +
						"<option>Kids</option>" +
						"<option>Education</option>" +
						"<option>Entertainment</option>" +
						"<option>Savings & Investments</option>" +
						"<option>Instalment </option>" +
						"<option>Entertainment </option>" +
						"<option>Others</option>" +
					"</select>";

function checkClick(){
	$('input[type=radio][name=revenueType]').change(function() {
			if (this.value == 'revenue') {
				let revenueHTML = "<div><label for='revenueChoice'>Category:</label></div>" +
					"<select id='revenueChoice' class='categories'>" +
					"<option selected>Salary</option>" +
					"<option>Investment income</option>" +
					"<option>Online sales</option>" +
					"<option>Others</option>"+
					"</select>";
				$("#revenueAndExpenseOptions").html(revenueHTML);
			}
			else if (this.value == 'expense') {
				$("#revenueAndExpenseOptions").html(expenseHTML);
			}
	});
}