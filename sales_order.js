frappe.ui.form.on('Sales Order', {
   after_save: function(frm) {
       frappe.call({
        method: 'frappe.client.insert',
        args: {
            doc: {doctype: 'Quotation',
            quotation_to: "Customer",
            party_name: 'aadithp',
    	items: [{"item_code": "Apple IPad (10.2 Inch, WiFi) - (8th Generation)(Gold, 32GB)",
    		"item_name": "Apple IPad (10.2 Inch, WiFi) - (8th Generation)(Gold, 32GB)",
    		"qty": 1.000,
    		"rate": 2990}]},
        },
        callback: function(r) {
                    console.log(r);
    		}
    });
	}
})
