# frozen_string_literal: true

# -------------------------------------
require 'json'
require 'net/http'
require 'uri'
require 'tanraku'
# -------------------------------------

class Overdrive
  def self.boost
    url = 'http://localhost:1337/datas'
    uri = URI.parse(url)
    json = Net::HTTP.get(uri)
    result = JSON.parse!(json)
    names = result['name']
    titles = result['title']
    dtcls = result['dtcl']
    dtcls_full = result['dtcl_full']
    neovims = result['neovim']
    jetbrains = result['jetbrain']
    reasons = result['reason']
    setting = result['settings']
    plugin = result['plugins']
    ide = result['ides']
    copyrights = result['copyright']
    author = result['authors']
    youtubes = result['youtube']
    unders = result['under']
    spas = result['spa']
    spas_full = result['spa_full']
    spas_dev = result['spa_dev']
    spas_js = result['spa_js']
    spas_cm = result['spa_cm']
    githubs = result['github']
    githubs_pf = result['github_pf']
    githubs_op = result['github_op']
    githubs_us = result['github_us']
    githubs_me = result['github_me']
    githubpage = result['githubpages']
    githubps_pf = result['githubp_pf']
    githubps_bd = result['githubp_bd']
    githubps_sy = result['githubp_sy']
    githubps_old = result['githubp_old']
    gists = result['gist']
    gists_p = result['gist_p']
    gists_op = result['gist_op']
    gists_sh = result['gist_sh']
    gists_mix = result['gist_mix']
    puts "#{names}"
    puts "#{titles}"
    puts "#{dtcls}"
    puts "#{dtcls_full}"
    puts "#{neovims}"
    puts "#{jetbrains}"
    puts "#{reasons}"
    puts "#{setting}"
    puts "#{plugin}"
    puts "#{ide}"
    puts "#{copyrights}"
    puts "#{author}"
    puts "#{youtubes}"
    puts "#{unders}"
    puts "#{spas}"
    puts "#{spas_full}"
    puts "#{spas_dev}"
    puts "#{spas_js}"
    puts "#{spas_cm}"
    puts "#{githubs}"
    puts "#{githubs_pf}"
    puts "#{githubs_op}"
    puts "#{githubs_us}"
    puts "#{githubs_me}"
    puts "#{githubpage}"
    puts "#{githubps_pf}"
    puts "#{githubps_bd}"
    puts "#{githubps_sy}"
    puts "#{githubps_old}"
    puts "#{gists}"
    puts "#{gists_p}"
    puts "#{gists_op}"
    puts "#{gists_sh}"
    puts "#{gists_mix}"
  end
end

begin
  Overdrive.boost
rescue Exception => e
  puts e.backtrace
  tanraku_execute
ensure
  GC.auto_compact
end
