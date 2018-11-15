using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestingLogRepository.Models {
    public class Log {

        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public string Message { get; set; }

        public Log() { }
    }
}
