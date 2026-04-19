using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ASPNetProj.Models.Entity
{
    public sealed class User
    {
        [Key, Column("id")] public int Id {get; init;}
        [Required, MaxLength(50), Column("name")] public string Name { get; init;} = string.Empty;

        [MaxLength(150), Column("email")] public string Email { get; init;} = string.Empty;

        [Range(1, 110), Column("age")] public int Age {get; init;}

        [Column("is_active")]public bool IsActive {get; init;}
    }
}