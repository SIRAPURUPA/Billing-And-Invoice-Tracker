package com.invoiceprocessing.server.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService{
	
	@Autowired
	InvoiceDao invoiceDao;
	
	@Override
	public Invoice addInvoice(Invoice invoice) {
		// TODO Auto-generated method stub
		invoiceDao.save(invoice);
		return invoice;
	}

	@Override
	public List<Invoice> getInvoices() {
		// TODO Auto-generated method stub
		return invoiceDao.findAll();
	}

	@Override
	public Invoice deleteInvoice(long id) {
		// TODO Auto-generated method stub
		Invoice invoice = invoiceDao.findById(id).get();
		invoiceDao.delete(invoice);
		return invoice;
	}

}
