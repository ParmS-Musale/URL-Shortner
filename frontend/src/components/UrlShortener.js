import React, { useState } from "react";
import { Link, Copy, CheckCircle, Globe, Zap, ArrowRight, ExternalLink } from "lucide-react";

function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShorten = async () => {
    if (!longUrl) {
      setError("Please enter a URL to shorten");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      // Simulated API call since we can't use axios
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock shortened URL for demonstration
      const mockShortUrl = `https://short.ly/${Math.random().toString(36).substr(2, 8)}`;
      setShortUrl(mockShortUrl);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      {/* Royal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600/15 to-gold-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/8 to-purple-500/8 rounded-full blur-2xl animate-ping"></div>
        {/* Royal crown pattern */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-amber-400/5 to-purple-500/5 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-amber-400/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 via-amber-500 to-purple-600 rounded-2xl mb-4 shadow-2xl shadow-purple-500/25 relative">
            <Link className="w-8 h-8 text-white drop-shadow-lg" />
            {/* Crown effect */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-amber-400 via-purple-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">
            Shortify
          </h1>
          <p className="text-gray-300 text-lg font-medium">Royal URL Shortening Experience</p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 via-purple-900/20 to-gray-900/40 border border-purple-500/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10 relative">
          {/* Royal decorative elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
          <div className="space-y-6">
            {/* Input Section */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Globe className="h-5 w-5 text-amber-400/70" />
              </div>
              <input
                type="text"
                placeholder="Paste your long URL here..."
                className="w-full pl-12 pr-4 py-4 bg-black/30 border border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all duration-300 text-sm backdrop-blur-sm"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>

            {/* Button */}
            <button
              onClick={handleShorten}
              disabled={isLoading || !longUrl}
              className="group w-full bg-gradient-to-r from-purple-600 via-amber-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden border border-amber-500/20"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  <span>Shortening...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 group-hover:animate-pulse text-amber-100" />
                  <span>Shorten URL</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-100" />
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-purple-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </button>

            {/* Error Message */}
            {error && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-4 text-red-300 text-center backdrop-blur-sm animate-shake">
                ⚠️ {error}
              </div>
            )}

            {/* Success Result */}
            {shortUrl && (
              <div className="bg-gradient-to-r from-green-900/20 via-emerald-900/20 to-green-900/20 border border-green-500/30 rounded-2xl p-6 backdrop-blur-sm animate-slideUp">
                <div className="text-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-300 font-semibold text-lg">URL Shortened Successfully!</p>
                </div>
                
                <div className="bg-black/20 border border-purple-500/20 rounded-xl p-4 flex items-center justify-between group hover:bg-black/30 transition-all duration-300">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:text-amber-200 font-mono text-sm flex-1 truncate mr-3 flex items-center"
                  >
                    {shortUrl}
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <button
                    onClick={handleCopy}
                    className="flex items-center space-x-2 bg-gradient-to-r from-purple-600/30 to-amber-500/30 hover:from-purple-500/40 hover:to-amber-400/40 text-amber-200 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 border border-amber-500/20"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs font-medium">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p className="font-medium">👑 Premium • Secure • Lightning Fast</p>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default UrlShortener;