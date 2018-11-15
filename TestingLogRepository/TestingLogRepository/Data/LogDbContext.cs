using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TestingLogRepository.Models
{
    public class LogDbContext : DbContext
    {
        public LogDbContext (DbContextOptions<LogDbContext> options)
            : base(options)
        {
        }

        public DbSet<TestingLogRepository.Models.Log> Log { get; set; }
    }
}
