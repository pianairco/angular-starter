package ir.piana.business.multishop.module.auth.data.repository;

import ir.piana.business.multishop.module.auth.data.entity.UserRolesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRolesRepository extends JpaRepository<UserRolesEntity, Long> {
}
