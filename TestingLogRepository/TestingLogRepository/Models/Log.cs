using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestingLogRepository.Models {

    public enum LogLevel { All, Fatal, Error, Warn, Info }

    public class Log {

        public static Dictionary<LogLevel, string> LogLevelDisplay = new Dictionary<LogLevel, string> {
          [LogLevel.All] = "All",
          [LogLevel.Fatal] = "Fatal",
          [LogLevel.Error] = "Error",
          [LogLevel.Warn] = "Warn",
          [LogLevel.Info] = "Info"
        };

        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        [StringLength(10)]
        [Required]
        public string Level { get; set; }
        [StringLength(255)]
        [Required]
        public string Message { get; set; }

        public Log() { }
    }
}
