namespace Administration{
    public class User{
        public int UserId { get; set; }
        public required string Name { get; set; }
        public required string Email {get;set;}
        public long PhoneNumber { get; set; }
        public required string UserName { get; set; }
        public required string Password { get; set; }
        public required string Salt { get; set; }

    }
}