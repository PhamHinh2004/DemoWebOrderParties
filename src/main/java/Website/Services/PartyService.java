package Website.Services;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Website.Models.Party;
import Website.Respositories.PartyRepository;

@Service
public class PartyService {
	
	List<Party> orders = new ArrayList<>();
	
	@Autowired
	PartyRepository partyRepository;
	
	@PostConstruct
	public void init() {
		orders = partyRepository.findAll();
	}
	
	public List<Party> getAll(){
		return orders;
	}
	
	public Party addOder(Party o) {
		Party rs = partyRepository.save(o);
		init();
		return rs;
	}
	
	public void deleteOrder(long id) {
		 partyRepository.deleteById(id);
		 init();
	}
	
	public Party getPartyById(Long id) {
		
		return partyRepository.getPartyById(id);
	}
	
	public boolean updateOrder(Party o, Long id) {
		int rs = partyRepository.updateParty(id, o.getName(),
									o.getNumber(),o.getDate(), 
									o.getTime(), o.getQuantity(), 
									o.getTypesofParty(), o.getTypesofRooms(), 
									o.getServices(), o.isMembers(), o.getNote());
		init();
		return rs > 0;
	}
}
