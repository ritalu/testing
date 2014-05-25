#!/usr/bin/env python

import json
import collections

# For sending the email.
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# For the SMTP server-related exceptions.
import socket
import ssl

def _format_email_contents_html(self, message):
    contents = "<!DOCTYPE html>\n<html>\n<meta http-equiv='Content-Type' " \
               "content='text/html; charset=UTF-8' />\n<body>\n<pre>"
    """ Check out gmail smtp templates and fill in email contents here """
    contents += message
    contents += "\n</pre>\n</body>\n</html>"

    return output


def _send_email(self, from_addr, to_addr, smtp_obj, email_content):
    # Create message container - the correct MIME type is multipart/alternative.
    msg = MIMEMultipart('alternative')
    msg['Subject'] = "Gridhub - Your Github Masterpiece"
    msg['From'] = self.from_addr
    msg['To'] = self.to_addr
    # Record the MIME type of the message.
    mime_message = MIMEText(self.email_content, 'html')
    # Attach parts into message container.
    msg.attach(mime_message)
    self.smtp_obj.sendmail(from_addr, to_addr, msg.as_string())
    print "\nSuccessfully sent email from {0} to {1}.\n".format(from_addr, to_addr)

    return smtp_obj.quit()


def _main():
    to_addr, from_addr, smtp_server = "vonatarbi@gmail.com", "vonatarbi@gmail.com", "smtp.gmail.com"
    email_msg = "test"
    try:
        smtp_connection = smtplib.SMTP(smtp_server, 25, None, 5)
        email_content = _format_output_for_html_email(email_msg)
        _send_email(from_addr, to_addr, smtp_connection, email_content)
    except (socket.error, socket.gaierror) as e:
        print "Error: Unable to connect to the given server: {0}. " \
              "Please check if this server is valid and try again.\n " \
              "Exception message: {1}".format(smtp_server, e)
    except ssl.SSLError as e:
        print "Error: Connection timed out {0}. " \
              "Please check if this server is valid and try again.\n" \
              "Exception message: {1}".format(smtp_server, e)


if __name__ == '__main__':
    _main()
