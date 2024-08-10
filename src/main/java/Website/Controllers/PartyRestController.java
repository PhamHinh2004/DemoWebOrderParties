package Website.Controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Website.Models.Party;
import Website.Services.PartyService;

@RestController
@RequestMapping("api/v1")
public class PartyRestController {
	@Autowired
	PartyService partyService;
	
	@GetMapping("/party/{id}")
	public Party getPartyById(@PathVariable(name = "id") Long id) {
		return partyService.getPartyById(id);
	}
	
	@GetMapping("/parties")
	public List<Party> getList(){
		return partyService.getAll();
	}
	
	@PostMapping("/party")
	public ResponseEntity<Party> addParty(@RequestBody Party party){
		partyService.addOder(party);
		return ResponseEntity.ok().body(party);
	}
	
	@PutMapping("/party/{id}")
	public ResponseEntity<Void> updateParty(@PathVariable(name = "id") Long id,@RequestBody Party party) {
		partyService.updateOrder(party, id);
		return ResponseEntity.ok().build();
	}
	
	@DeleteMapping("/party/{id}")
	public ResponseEntity<Party> deleteParty(@PathVariable Long id){
		partyService.deleteOrder(id);
		return ResponseEntity.ok().build();
	}
}
