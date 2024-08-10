package Website.Respositories;

import java.sql.Date;
import java.time.LocalTime;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Website.Models.Party;

@Repository
public interface PartyRepository extends JpaRepository<Party, Long>{
    @Modifying
    @Transactional
    @Query("UPDATE Party p SET p.name = :name, p.number = :number, p.date = :date, p.time = :time, p.quantity = :quantity, p.typesofParty = :typesofParty, p.typesofRooms = :typesofRooms, p.services = :services, p.members = :members, p.note = :note WHERE p.id = :id")
    int updateParty(@Param("id") Long id,
            @Param("name") String name,
            @Param("number") String number,
            @Param("date") Date date,
            @Param("time") LocalTime time,
            @Param("quantity") int quantity,
            @Param("typesofParty") String typesofParty,
            @Param("typesofRooms") String typesofRooms,
            @Param("services") String services,
            @Param("members") boolean members,
            @Param("note") String note);
    
    @Query("SELECT p from Party p WHERE p.id= :id")
    Party getPartyById(@Param("id") Long id);
}
