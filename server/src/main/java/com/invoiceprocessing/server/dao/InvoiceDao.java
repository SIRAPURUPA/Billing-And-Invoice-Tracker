package com.invoiceprocessing.server.dao;
import org.springframework.data.jpa.repository.*;

import com.invoiceprocessing.server.model.Invoice;
public interface InvoiceDao extends JpaRepository<Invoice, Long> {
	
	
}
