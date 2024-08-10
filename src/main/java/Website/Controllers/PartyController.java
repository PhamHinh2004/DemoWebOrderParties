package Website.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import Website.Services.PartyService;

@Controller
public class PartyController {
	
	@Autowired
	PartyService partyService;
	
	@GetMapping("/")
	public String getApplication() {
		return "Application";
	}
	
	
    @PostMapping("/")
    public String postApplication(@RequestParam(required = false) String ten,
                                  @RequestParam(required = false) String dienThoai,
                                  @RequestParam(required = false) String date,
                                  @RequestParam(required = false) String time,
                                  @RequestParam(required = false) String many,
                                  @RequestParam(required = false) String kind,
                                  @RequestParam(required = false) String note,
                                  Model model) {
        // Xử lý các tham số và thêm vào model nếu cần
        model.addAttribute("ten", ten);
        model.addAttribute("dienThoai", dienThoai);
        model.addAttribute("date", date);
        model.addAttribute("time", time);
        model.addAttribute("many", many);
        model.addAttribute("kind", kind);
        model.addAttribute("note", note);

        return "Application"; 
    }
    
    @GetMapping("/success")
    public String getSucess() {
    	return "success";
    }
}
