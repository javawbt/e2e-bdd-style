#!/usr/bin/env bash

RED="\033[0;31m"
NO_COLOUR="\033[0m"
YELLOW="\033[0;33m"
WHITE="\033[1;37m"
CYAN="\033[0;36m"
LINE_BREAK="-------------------------------------------------------------------------------"
MSG_PREFIX="UI"

line_break_if_loud() {
  if [ "$LOUD_MESSAGES" == "true" ]; then
    echo "${YELLOW}$LINE_BREAK${NO_COLOUR}"
  fi
}

# Print error message in red and exit the script immediately with error code 1.
exit_with_error() {
  echo ""
  line_break_if_loud
  echo "${YELLOW}${MSG_PREFIX}${RED} $1${NO_COLOUR}"
  line_break_if_loud
  echo ""
  exit 1
}

# Print a non-error message that stands out!
show_info() {
  line_break_if_loud
  echo "${YELLOW}${MSG_PREFIX}${WHITE} $1${NO_COLOUR}"
  line_break_if_loud
}

# Print a success message with an output path at the end in a different color
show_output_success() {
  echo ""
  line_break_if_loud
  echo "${YELLOW}${MSG_PREFIX}${WHITE} $1 ${CYAN}$2${NO_COLOUR}"
  line_break_if_loud
  echo ""
}
